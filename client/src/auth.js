export const isAuthenticated = async ()=>{
    const valueAPI = await fetch('http://localhost:5000/user/verify')
    const [value] = await Promise.all([valueAPI])
    const valueJSON = await value.json()
    if(valueJSON.response===false){
        return false
    }else{
        return true
    }
} 