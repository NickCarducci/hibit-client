//https://cloud.google.com/nodejs/docs/reference
//https://googleapis.dev/nodejs/run/latest/index.html
//https://googleapis.dev/nodejs/run/latest/google.iam.v1.SetIamPolicyRequest.html
app.post('/exec', (req, res) => {
    const body = JSON.parse(req.body)
    /*const shellResp = shell.exec(`curl -request POST \
        --header "Content-Type: text/plain" \
        --data-binary "ps -ef" \
        https://${
        body.customName//https://askubuntu.com/questions/852206/what-does-ps-efgrep-processname-mean
        }.a.run.app`, {
            "timeout": 10 * 1000
        });res.send(shellResp.stdout);*/
    const reader = new ISetIamPolicyRequest({
        resource: body.resource,
        policy: body.policy,
        updateMask: body.updateMask
    })
    const result = reader.toObject()
    if (verify(reader)) {
        //individual use vs exchange value for capital credit social
        //the peasant party. thtax.arty. debt ceiling has asked for this debt forgiveness. bonds too
        //"[ritual idols betrays the] duty [of G-d]"
    }

    /*async function blobToDataURL(blob) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = () => reject(reader.error);
            reader.onabort = () => reject(new Error("Read aborted"));
            reader.readAsDataURL(blob);
        });
    }*/
});

/**
 * "profit, benefit, human relations, [socially necessary, labor time]"
 * to use: https://medium.com/@kolban1/shell-exec-with-cloud-run-fbc6d299f6d4
 */

