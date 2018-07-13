app.controller("slContrl", ($scope, slService)=>{
        $scope.strings = slService.getStrings();
        let lang = navigator.language.substring(0,2);
        if(lang !== 'pt'){
          lang = 'en';
          document.querySelector('title').textContent = 'Shopping List';
        }
        $scope.appName = $scope.strings[lang].APP_NAME;
        $scope.addBtnLabel = $scope.strings[lang].ADD_ITEM;
        $scope.delBtnLabel = $scope.strings[lang].REMOVE;
        $scope.placeholder = $scope.strings[lang].PLACEHOLDER;
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
