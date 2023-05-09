function extract(string) {
    let stringArr = string.split('\\');

    let file = stringArr.pop()

    let fileName = file.substring(0, file.lastIndexOf('.'));

    let fileExtension = file.substring(file.lastIndexOf('.') + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
}

extract('C:\\Internal\\training-internal\\Template.pptx.bak');