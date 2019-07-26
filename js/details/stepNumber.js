class StepNumber {
    constructor(parent, callback, goods) {
        this.step = 1;
        this.callback = callback;
        this.goods = goods;
        this.stepNumber = this.createStepNumber(parent);
    }
    createStepNumber(parent) {
        if (this.stepNumber) return this.stepNumber;
        let div = document.createElement("div");
        let leftBn = document.createElement("button");
        leftBn.textContent = "-";
        let input = document.createElement("input");
        input.value = 1;
        let rightBn = document.createElement("button");
        rightBn.textContent = "+";
        Object.assign(input.style, {
            width: "40px",
            height: "18px",
            border: "1px solid #999999",
            outline: "none",
            textAlign: "center"
        });
        let bnStyle = {
            width: "20px",
            height: "20px",
            border: "1px solid #999999",
            backgroundColor: "#FFFFFF",
            outline: "none",
            cursor: "pointer"
        };
        Object.assign(leftBn.style, bnStyle, {
            borderRight: "none"
        });
        Object.assign(rightBn.style, bnStyle, {
            borderLeft: "none"
        });
        div.appendChild(leftBn);
        div.appendChild(input);
        input.className="numm";
        div.appendChild(rightBn);
        leftBn.disabled = true;
        leftBn.addEventListener("click", this.bnClickHandler.bind(this));
        rightBn.addEventListener("click", this.bnClickHandler.bind(this));
        input.addEventListener("input", this.inputHandler.bind(this));
        parent.appendChild(div);
        return div;
    }
    setStep(num) {
        this.step = Number(num);
        if (this.step <= 1) {
            this.step = 1;
            //这个stepNumber是div自身
            this.stepNumber.firstElementChild.disabled = true;
        } else if (this.step >= 99) {
            this.stepNumber.lastElementChild.disabled = true;
            this.step = 99;
        } else {
            this.stepNumber.firstElementChild.disabled = false;
            this.stepNumber.lastElementChild.disabled = false;
        }
        this.stepNumber.children[1].value = this.step;
        if (!this.bool) return;
        this.bool = false;
        this.callback(this.goods, this.step);
    }
    bnClickHandler(e) {
        this.bool = true;
        if (e.currentTarget.textContent === "+") {
            //                    this是外面绑定这个对象
            this.setStep(this.step + 1);
        } else if (e.currentTarget.textContent === "-") {
            this.setStep(this.step - 1);
        }
    }
    inputHandler(e) {
        if (this.ids) return;
        //当使用setTimeout或者setInterval时,回调的函数中this都会被指向window
        this.ids = setTimeout(this.throttlingHandler.bind(this), 500, e.currentTarget)
    }
    throttlingHandler(input) {
        clearTimeout(this.ids);
        this.ids = 0;
        this.bool = true;
        let num = input.value.replace(/[^0-9]/g, "");
        this.setStep(num);
    }
}