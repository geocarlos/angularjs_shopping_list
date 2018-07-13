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

        this.getStrings = () => {
          this.strings = {
            en:{
              APP_NAME: 'Shopping List',
              PLACEHOLDER: 'new item',
              ADD_ITEM: 'Add item',
              REMOVE: 'Remove'
            },
            pt:{
              APP_NAME: 'Lista de Compras',
              PLACEHOLDER: 'novo item',
              ADD_ITEM: 'Adicionar item',
              REMOVE: 'Excluir'
            }
          }
          return this.strings;
        }
    });
