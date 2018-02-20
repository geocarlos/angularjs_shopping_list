app.service("slService", function(){
        this.saveList = items => {           
            let list = JSON.stringify(items);
            if("Storage" !== undefined){               
                localStorage.setItem("list", list);
            } else {
                alert("Unable to save list");
            }
        }
        
        this.getList = () => {
            
            if("Storage" !== undefined){
                return JSON.parse(localStorage.getItem("list"));
            }
            
            alert("Unable to get list");
        }
    });