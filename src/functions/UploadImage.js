import ImagePicker, { showImagePicker } from 'react-native-image-picker';
import RNFetchBlob from 'rn-fetch-blob';
import firebase, { storage } from 'firebase';
import { Platform } from 'react-native';
import md5 from 'react-native-md5';
import EventEmitter from "react-native-md5";
const Blob = RNFetchBlob.polyfill.Blob;
const fs = RNFetchBlob.fs;
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = Blob;

export default uploadImage = (uri, folder, userID, mime = 'application/octet-stream') =>{
  uri.path = 'file://' + uri.path;
  return new Promise((resolve, reject) => {
    const uploadUri = Platform.OS === 'ios' ? uri.path.replace('file://', '') : uri.path;
    let uploadBlob = null;
    const imageRef = firebase.storage().ref(folder).child(md5.hex_md5(Date.now() +" ") + uri.fileName);

    fs.readFile(uploadUri, 'base64').then((data) =>{
      return Blob.build(data, { type: `${mime};BASE64` });
    }).then((blob) => {
      uploadBlob = blob;
      return imageRef.put(blob, { contentType: mime });
    }).then(() =>{
      uploadBlob.close();
      return imageRef.getDownloadURL();
    }).then((url) => {
      resolve(url);
    }).catch((error) => {
      reject(error);
    });
  });
}
