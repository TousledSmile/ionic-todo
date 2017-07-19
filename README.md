It's a simple todo list for mobile devices

### How to run with Ionic CLI:

Install ionic, cordova and all dependencies:

```bash
$ sudo npm i -g ionic cordova

```

Install [Android SDK](https://developer.android.com/studio/index.html)

Make sure, that ANDROID_HOME environment variable is setup correct

Then, to run it on ios:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

or on android:

```bash
$ ionic cordova platform add android
$ sh start.sh
```

