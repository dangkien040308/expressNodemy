
const getAPI = (req,res) => {
    return res.json([
        {
            name : "Dang Viet Kien",
            age : 16 
        } ,
        {
            name : "Dang Viet Trung",
            age : 18 
        } ,
        {
            name : "Dang Huy Hoang",
            age : 20 
        } 
    ])
}

module.exports = getAPI