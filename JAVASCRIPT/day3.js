
            var details=async()=>{
                var response= await fetch('https://dummyjson.com/');
                var users=await response.json();
                console.log(users)
            }

            details()