import * as FileSystem from 'expo-file-system';
import JSZip from "jszip"
import JSZipUtils from "jszip-utils"

// https://github.com/smoll/crna-zipfile/blob/master/App.js

async function getFileInBinary(fileUri) {
    const data = await new JSZip.external.Promise((resolve, reject) => {
        JSZipUtils.getBinaryContent(fileUri, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
    return data
}

export async function getLocationFile(fileUri) {
    const parts = fileUri.split('/')
    parts.splice(-1)
    const relativePath = parts.join('/')
    // const locationFilePath = `${relativePath}/Takeout/Location%20History/Location%20History.json`
    const locationFilePath = `${FileSystem.documentDirectory}Location History/Location History-unzipped.json`

    console.log('getting file: ', locationFilePath)

    const locationFileData = await FileSystem.readAsStringAsync(locationFilePath)

    console.log('got location file')

    return locationFileData
}

export async function getFilteredLocationHistory(zip) {
    console.log('pick Location History.json')

    const filteredResults = zip.filter((relativePath, file) => relativePath.endsWith('History.json'))

    if (filteredResults.length > 0) {
        console.log('found file')

        const locationFile = filteredResults[0]
        const fileContent = await locationFile.async('binarystring')
        return JSON.parse(fileContent)
    }

    return null
}

export async function unzipArchive(fileUri) {
    console.log('reading: ', fileUri)

    const fileInBinary = await getFileInBinary(fileUri)

    console.log('unzipping: ')

    const zip = await JSZip.loadAsync(fileInBinary)

    console.log('done unzipping')

    return zip
}