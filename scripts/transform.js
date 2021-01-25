module.exports = async function transform(serverless, stackOutputs) {

    stackOutputs.TrackingServiceEndpoint = stackOutputs.ServiceEndpoint;

    // delete
    delete stackOutputs.ServerlessDeploymentBucketName;
    delete stackOutputs.ServiceEndpoint;

    // return updated stack
    return stackOutputs;
}