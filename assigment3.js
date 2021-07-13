//Print all the palindrome words given in a statement
let str = "madam met naman in the noon.madam use to teach malayalam in noon to naman"
let str1 = "",
    str2 = ""
for (t of str) {
    if (t != " ") {
        str2 = str2 + t
        str1 = t + str1
    } else {
        if (str1 == str2) console.log(str1)
        str1 = ""
        str2 = ""
    }
}
