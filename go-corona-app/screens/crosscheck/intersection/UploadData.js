import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

import ProgressBarContainer from '../../../components/ProgressBar';
import CustomButton from '../../../components/button/index'
import QuestionIcon from '../../../assets/images/Question.svg'
import LinkIcon from '../../../assets/images/Link.svg'
import UploadIcon from '../../../assets/images/Upload.svg'
import TickIcon from '../../../assets/images/Tick.svg'
import Separator from '../../../components/Separator';

import { unzipArchive, getLocationFile, getFilteredLocationHistory } from '../../../utils/ProcessData'

export default function UploadDataScreen() {
    const [uploadedFileMeta, setUploadedFileMeta] = useState(null)

    const handleUploadFilePress = async () => {
        const result = await DocumentPicker.getDocumentAsync({ type: 'application/zip' })
        if (result.type === "success") {
            setUploadedFileMeta(result)
        }
        console.log(result)

        const unzippedFiles = await unzipArchive(result.uri)
        const json_file = await getFilteredLocationHistory(unzippedFiles)

        if (json_file) {
            console.log('Found Location History')
            console.log(json_file)

        } else {
            console.log('Could not find Location History file')
        }

    }

    const text = "Patient"
    const pageNo = 3;

    return (
        <ScrollView>
            <View style={styles.viewContainer}>
                <ProgressBarContainer textOnTop={text} currPage={pageNo} totalPages={3} />
                <View style={styles.container}>
                    <View style={styles.sectionContainer}>
                        <Text style={styles.title}>Run the tutorial and download data</Text>
                        <View style={styles.helpLinks}>
                            <CustomButton Icon={QuestionIcon} label="Take me through the tutorial" />
                            <CustomButton Icon={LinkIcon} label="I am all set, take me to Google for downloads" />
                        </View>
                    </View>
                    <Separator />
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
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: '#fafafa',
        justifyContent: 'flex-start'
    },
    container: {
        justifyContent: 'center'
    },
    sectionContainer: {
        marginTop: 40,
        marginBottom: 40,
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    helpLinks: {
        marginTop: 30,
        padding: 5,
        width: "90%"
    },
    uploadedFileMessage: {
        flexWrap: "wrap",
        textAlign: "center"
    }
});
