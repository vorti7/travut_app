import Amplify, { Auth } from 'aws-amplify';
import { Navigator, ScreenConst } from '../../navigation';

const User = {
    /*
    Signup Info example
    {
        username: useremail,
        password: userpassword,
        attributes: {
        name: username,
        }
    }
    */
    signupTraveler(signupInfo){
        return new Promise(function (resolve, reject){
            Navigator.showOverlay("spinnerOverlay",  ScreenConst.SCREEN_COMMON_LOADING)
            Auth.signUp(signupInfo)
            .then(success => {
                Navigator.dismissOverlay("spinnerOverlay")
                resolve("success")
            })
            .catch(err => {
                Navigator.dismissOverlay("spinnerOverlay")
                reject(err.message)
            })
        })
    },

    signupTraveler_us(signupInfo){
        Amplify.configure({
            Auth: {
        
                // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
                // identityPoolId: 'XX-XXXX-X:XXXXXXXX-XXXX-1234-abcd-1234567890ab',
                
                // REQUIRED - Amazon Cognito Region
                region: 'us-east-1',
        
                // OPTIONAL - Amazon Cognito Federated Identity Pool Region 
                // Required only if it's different from Amazon Cognito Region
                // identityPoolRegion: 'us-east-1',
        
                // OPTIONAL - Amazon Cognito User Pool ID
                userPoolId: 'us-east-1_3rijIfqa7',
        
                // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
                userPoolWebClientId: '7oinfa74bokk64qc2b43p9vsss',
        
                // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
                mandatorySignIn: false,
        
                // OPTIONAL - Configuration for cookie storage
                // Note: if the secure flag is set to true, then the cookie transmission requires a secure protocol
                cookieStorage: {
                // REQUIRED - Cookie domain (only required if cookieStorage is provided)
                    domain: '.yourdomain.com',
                // OPTIONAL - Cookie path
                    path: '/',
                // OPTIONAL - Cookie expiration in days
                    expires: 365,
                // OPTIONAL - Cookie secure flag
                // Either true or false, indicating if the cookie transmission requires a secure protocol (https).
                    secure: true
                },
        
                // OPTIONAL - customized storage object
                // storage: new MyStorage(),
                
                // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
                authenticationFlowType: 'USER_PASSWORD_AUTH'
            }
        });
        
        // You can get the current config object
        const currentConfig = Auth.configure();
        return new Promise(function (resolve, reject){
            Navigator.showOverlay("spinnerOverlay",  ScreenConst.SCREEN_COMMON_LOADING)
            Auth.signUp(signupInfo)
            .then(success => {
                Navigator.dismissOverlay("spinnerOverlay")
                resolve("success")
            })
            .catch(err => {
                Navigator.dismissOverlay("spinnerOverlay")
                reject(err.message)
            })
        })
    },

    checkLogin(){
        console.log('login checking')
        return new Promise(function (resolve, reject){
            Auth.currentSession()
                    .then(data => {
                        resolve(data)
                    })
                    .catch(err => {
                        reject(err)
                    })
        })
    },
    
    checkLoginChangePage(cmpId, yesSession, noSession){
        console.log('checkLoginChangePage called')
        this.checkLogin().then(success => {
            console.log('session found ', cmpId)
            Navigator.setRootScreen(cmpId, yesSession)
        })
        .catch(err => {
            console.log('no session found ', cmpId)
            Navigator.setRootScreen(cmpId, noSession)
        })
    },

    loginTraveler(loginEmail, loginPassword){
        console.log(loginEmail,loginPassword)
        return new Promise(function (resolve, reject){
            // Navigator.showOverlay("spinnerOverlay", ScreenConst.SCREEN_COMMON_LOADING )
            
            Auth.signIn(loginEmail, loginPassword)
                .then(success => {
                    console.log('\nlogin success\n'+JSON.stringify(success))
                    // Navigator.dismissOverlay("spinnerOverlay")
                    resolve('success')
                })
                .catch(err => {
                    console.log('\nlogin failed\n'+JSON.stringify(err))
                    // Navigator.dismissOverlay("spinnerOverlay")
                    reject(err.message)
                });
        })
    },

    logoutTraveler(cmpId){
        return new Promise(function (resolve, reject){
            Auth.signOut()
                .then(success => {
                    resolve(success)
                    Navigator.setRootScreen(cmpId,ScreenConst.SCREEN_USER_LOGIN)
                })
                .catch(err => {
                    reject(err.message)
                });
        })
    },

    changePassword(oldPassword, newPassword){
        //Login Required
        Auth.currentAuthenticatedUser()
        .then(user => {
            return Auth.changePassword(user, oldPassword, newPassword);
        })
        .then(data => console.log(data))
        .catch(err => console.log(err));
    },

    //attr : 'phone_number' or 'email'
    sendForVerify(attr){
        Auth.verifyCurrentUserAttribute(attr)
        .then(() => {
            console.log('a verification code is sent');
        }).catch((e) => {
            console.log('failed with error', e);
        });
    },

    //attr : 'phone_number' or 'email'
    verfyUserByCode(attr, code){
        Auth.verifyCurrentUserAttributeSubmit(attr, code)
        .then(() => {
            console.log('user verified');
        }).catch(e => {
            console.log('failed with error', e);
        });
    },

    requestForgotPassword(username){
        Auth.forgotPassword(username)
        .then(data => console.log(data))
        .catch(err => console.log(err));
    },

    getForgotPassword(username, code, new_password){
        Auth.forgotPasswordSubmit(username, code, new_password)
        .then(data => console.log(data))
        .catch(err => console.log(err));
    },




    getInfoTraveler(){
        Auth.currentAuthenticatedUser()
                .then(data => console.log('currentAuthenticatedUser data : ',getLog(data)))
                .catch(err => {console.log('error : ',err,'\n\n')})
        Auth.currentCredentials()
                .then(data => console.log('currentCredentials data : ',getLog(data)))
                .catch(err => {console.log('error : ',err,'\n\n')})
        Auth.currentSession()
                .then(data => console.log('currentSession data : ',getLog(data)))
                .catch(err => {console.log('error : ',err,'\n\n')})
        Auth.currentUserCredentials()
                .then(data => console.log('currentUserCredentials data : ',getLog(data)))
                .catch(err => {console.log('error : ',err,'\n\n')})
        Auth.currentUserInfo()
                .then(data => console.log('currentUserInfo data : ',getLog(data)))
                .catch(err => {console.log('error : ',err,'\n\n')})
        Auth.currentUserPoolUser()
                .then(data => console.log('currentUserPoolUser data : ',getLog(data)))
                .catch(err => {console.log('error : ',err,'\n\n')})
        

    },

    getLog(input){
        // console.log('\n')
        Object.keys(input).forEach(function(aKey, index){
            console.log((index+1) + ". "+aKey + " : "+JSON.stringify(input[aKey]))
        })
        console.log('\n')
    }
}

export default User