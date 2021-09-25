const { Storage } = require('@google-cloud/storage');
const path = require('path')

const storage = new Storage({
    keyFilename: path.join(__dirname, './credentials.json'),
    projectId: 'coachedapp'
})

let bucket = "staging.coachedapp.appspot.com"
let file = "my_file.jpg"

async function generateV4ReadSignedUrl() {
    const post_options = {
        version: 'v4',
        action: 'write',
        expires: Date.now() + 100000000,
        // contentType: 'image/jpeg'
    };

    // Get a v4 signed URL for reading the file
    const post_url = await storage
        .bucket(bucket)
        .file(file)
        .getSignedUrl(post_options);

    // const get_options = {
    //     version: 'v4',
    //     action: 'read',
    //     // expires: Date.now() + 10000000,
    //     // contentType: 'image/jpeg'
    // };

    // // Get a v4 signed URL for reading the file
    // const get_url = await storage
    //     .bucket('staging.coachedapp.appspot.com')
    //     .file("my_file.mp4")
    //     .getSignedUrl(get_options);


    async function makePublic() {
        await storage.bucket(bucket).file(file).makePublic();

        console.log(`gs://${bucket}/${file} is now public.`);
    }

    makePublic().catch(console.error);


    console.log('Generated GET signed URL:');
    // console.log(get_url);
    console.log('You can use this URL with any user agent, for example:');
    console.log(`curl -X PUT --upload-file ./Downloads/250472.jpg '${post_url}'`);
}

generateV4ReadSignedUrl().catch(console.error);

pub_url = `https://storage.googleapis.com/${bucket}/${file}`
console.log(pub_url)