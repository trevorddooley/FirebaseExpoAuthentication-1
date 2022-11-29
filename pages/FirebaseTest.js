import firestore from '@react-native-firebase/firestore';

firestore()
    .collection('https://console.firebase.google.com/project/undefined/firestore/data/')
    .add({
        Age: '7 Months',
        Date: '11/10/2022',
        Deceased_Status: 'No',
        Location: '2190',
        Species: 'Cat',
        Time: '01:01:01',
    })
    .then(() => {
        console.log('User added!');
    });