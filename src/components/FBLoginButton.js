import React from 'react';
import { TouchableNativeFeedback } from 'react-native';
import { LoginManager, AccessToken, GraphRequest, GraphRequestManager  } from 'react-native-fbsdk';
import { TouchableNative } from './common';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default class FBLoginButton extends React.Component{
  fbLoginHandler() {
    LoginManager.logOut();
    LoginManager.logInWithReadPermissions(['email public_profile']).then(
      (result) => {
        AccessToken.getCurrentAccessToken().then((data) =>{
          this.props.data(data);
        });
      }
    );
  }

  render(){
    return(
      <TouchableNative background={TouchableNativeFeedback.Ripple('#545454', false)} onPress={ () => this.fbLoginHandler()}>
        <FontAwesome name="facebook-official" size = {48} color= "#05f" style={styles.iconStyle}/>
      </TouchableNative>  
    );
  }
}

const styles = {
  iconStyle: {
    backgroundColor:"#fff", 
    height: 44, 
    width:43, 
    borderWidth: 4, 
    borderRadius: 12, 
    borderColor: '#212121',
    borderBottomWidth:0, 
    borderBottomColor: 'transparent'
  }
}
