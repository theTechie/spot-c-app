import * as FileSystem from 'expo-file-system';
import JSZip from "jszip"
import JSZipUtils from "jszip-utils"

export async function unzipArchive(fileUri) {
    console.log('reading: ', fileUri)

    const data = await new JSZip.external.Promise((resolve, reject) => {
      JSZipUtils.getBinaryContent(fileUri, (err, data) => {
        if (err) {
          reject(err)
        } else {
          resolve(data)
        }
      })
    })

    console.log('unzipping: ')

    const zip = await JSZip.loadAsync(data)

    console.log('done unzipping')

    zip.forEach((relativePath, file) => {
        if (file.dir) return

        const uri = `${relativePath}`
        console.log(relativePath)

        // file.async('base64').then(base64 => {
        //     FileSystem.writeAsStringAsync(uri, base64, {
        //         encoding: FileSystem.EncodingTypes.Base64,
        //     })
        // })
    })
}