![](assets/banner1.png)
#
An app made in order to learn React Native.
# Demos
<table>
   <tr>
     <td align="center">
        <img src="assets/signup.gif" height="450"/>
      </td>
      <td align="center">
        <img src="assets/mainscreen.gif" height="450"/>
      </td>
      <td align="center">
        <img src="assets/createpost.gif" height="450"/>
      </td>
   </tr>
   <tr>
     <td align="center">
        Welcome screen and sign up 
      </td>
      <td align="center">
        Nearby Feed (other options not implemented yet)
      </td>
      <td align="center">
        Post Creation
      </td>
   </tr>
</table>
#

## Documentation

## Dependencies

## Installation
First of all, you need to clone the repository and run ``npm i`` to install dependencies.

```
$ git clone https://github.com/thalesdeluca/Vinchi.git
$ cd Vinchi
$ npm i
```

<br/>
<br/>

After this, you'll have to create a file on the project's root `` ~/Vinchi/ `` named `` api-key.js `` which it'll have to contain both firebase and google config:

```
export const config = {
   //Here goes your firebase config
   //apiKey, authDomain...
};

export const googleConfig = {
   //Here goes your google Auth config
   //webClient, offlineAccess...
}
```
<br/>
<br/>

Now you'll have to create and ``strings.xml`` file on path ``~/Vinchi/android/app/src/res/values/`` with the following:

```
<?xml version="1.0" encoding="utf-8"?>
<resources>
  <string name="app_name">Vinchi</string>
  <string name="facebook_app_id">//Here goes your facebook </string>
</resources>
```

<br/>
<br/>

On ``~/Vinchi/android/app/`` you'll have to place your ``google-services.json`` ( the one you get at firebase android setup).

<br/>

On project's root ``~/Vinchi/`` place your ``credentials.json`` that you get at google auth developers.

<br/>

And voilá, you're set!



##


