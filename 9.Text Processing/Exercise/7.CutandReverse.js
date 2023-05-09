function cutReverse(string) {

    let firstHalf = string.substring(0, string.length / 2).split('');
    let secondHalf = string.substring(string.length / 2).split('');

    console.log(firstHalf.reverse(), secondHalf.reverse());

}

cutReverse('tluciffiDsIsihTgnizamAoSsIsihT')