import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

import CustomButton from '../../../components/button/index'
import QuestionIcon from '../../../assets/images/Question.svg'
import LinkIcon from '../../../assets/images/Link.svg'
import UploadIcon from '../../../assets/images/Upload.svg'
import TickIcon from '../../../assets/images/Tick.svg'

export default function UploadDataScreen() {
    const [uploadedFileMeta, setUploadedFileMeta] = useState(null)

    const handleUploadFilePress = async () => {
        const result = await DocumentPicker.getDocumentAsync({ type: 'application/zip' })
        if (result.type === "success") {
            setUploadedFileMeta(result)
        }
        console.log(result)
    }

    return (
        <View style={styles.container}>
            <View style={styles.sectionContainer}>
                <Text style={styles.title}>Run the tutorial and download data</Text>
                <View style={styles.helpLinks}>
                    <CustomButton Icon={QuestionIcon} label="Take me through the tutorial" />
                    <CustomButton Icon={LinkIcon} label="I am all set, take me to Google for downloads" />
                </View>
            </View>
            <View style={styles.sectionContainer}>
                <Text style={styles.title}>Upload the Google Takeout Zip file</Text>
                <View style={styles.helpLinks}>
                    <CustomButton
                        Icon={uploadedFileMeta ? TickIcon : UploadIcon}
                        label={uploadedFileMeta ? uploadedFileMeta.name : "Upload here"}
                        disabled={uploadedFileMeta ? true : false}
                        onPress={handleUploadFilePress}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        justifyContent: 'space-around'
    },
    sectionContainer: {
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    helpLinks: {
        marginTop: 30,
        width: "90%"
    },
    uploadedFileMessage: {
        flexWrap: "wrap",
        textAlign: "center"
    }
});
