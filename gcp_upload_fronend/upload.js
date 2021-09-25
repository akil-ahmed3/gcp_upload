const signedUrl = 'https://storage.googleapis.com/staging.coachedapp.appspot.com/my_file.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=upload%40coachedapp.iam.gserviceaccount.com%2F20210924%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20210924T194020Z&X-Goog-Expires=100000&X-Goog-SignedHeaders=host&X-Goog-Signature=14522e774058db3190fdfe6304c659605482ce3bc06038bd9579b70192702a3d81059fea01b67304d0771cbc3fa63af7a1358143885cfcd5a23e1f1b044a4068523c6bcd99cbd1661ae85935ee294810396a355f2e59e0a085844b6f04d2a3e4adaaf72bededc7627f301d49cb7dd0876b1c1a6134a17cda550163fcb025b9e90848c61ad6ac7e7ae06cf71361fd4a8247ca709f435fccea919a91692c269b01234d8162e4953cf601472da5b46d2f0999e736f3851e179a15a2515441bc4a039fcd3835b5c58275b44b5230d64fa16abaae91630c9d98ad855772c0fc556ff60cd56336c86e48784851f5ca4b618e6e039f742521840928174728662d595cb5'
const fs = require('fs');

document.getElementById("submit").addEventListener("click", async function (event) {
    event.preventDefault()
    const image = await fs.readFile('./cric.png');

    // let file = document.getElementById("myfile").files[0]
    // console.log(file)

    // const formdata = new FormData()
    // formdata.append("encode", file)


    // let resp = await fetch(signedUrl, {
    //     method: "PUT",
    //     body: formdata,
    // });
    let resp = await axios({
        method: 'put',
        url: signedUrl,
        file: image
    });
    console.log(resp);
})()