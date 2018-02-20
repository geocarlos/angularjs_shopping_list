app.controller("slContrl", ($scope, slService)=>{
        $scope.appName = "Lista de Compras";
        $scope.addBtnLabel = "Adicionar item";
        $scope.delBtnLabel = "Excluir";
        $scope.saveList = slService.saveList;
        $scope.getList = slService.getList;        
        $scope.list = [];
        if($scope.getList()){
            $scope.list = $scope.getList();    
        }
        const input = document.querySelector("#in-text");      
        $scope.addItems = (item) => {            
            let list = $scope.list;
            const index = list.map(item => item.item).indexOf(item);
            if(index !== -1){
                list.splice(index, 1);               
            }
            list.unshift({item: item});
            $scope.saveList(list); 
            input.value = "";
            input.focus();
        }
        
        $scope.removeItem = (item) => {
            let list = $scope.list;
            list.splice(list.indexOf(item), 1);
            $scope.saveList(list); 
            input.value = "";
            input.focus();
        }  
    });