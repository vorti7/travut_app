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
            Navigator.showOverlay("spinnerOverlay", ScreenConst.SCREEN_COMMON_LOADING )
            Auth.signIn(loginEmail, loginPassword)
                .then(success => {
                    console.log('\nlogin success\n'+JSON.stringify(success))
                    Navigator.dismissOverlay("spinnerOverlay")
                    resolve('success')
                })
                .catch(err => {
                    console.log('\nlogin failed\n'+JSON.stringify(err))
                    Navigator.dismissOverlay("spinnerOverlay")
                    reject(err.message)
                });
        })
    },

    logoutTraveler(){
        return new Promise(function (resolve, reject){
            Auth.signOut()
                .then(success => {
                    resolve(success)
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