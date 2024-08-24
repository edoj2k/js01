let quizController = (function() {
    let private = 10;

    let privateFn = function(a) {
        return a + private;
    }

    return {
        publicMethod: function() {
            return privateFn(20);
        }
    }
})();


let UIController = (function() {
    let num1 = 30;

    return {
        sum: function(num2) {
            return num1 + num2;
        }
    }
})();

let controller = (function(quizCtrl, UICtrl) {
    console.log(UICtrl.sum(100) + quizController.publicMethod())
})(quizController, UIController);