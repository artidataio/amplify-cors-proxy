export type AmplifyDependentResourcesAttributes = {
    "function": {
        "corsproxyFunction": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "amplifycorsproxyaxiosLayer": {
            "Arn": "string"
        }
    },
    "api": {
        "corsproxy": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    }
}