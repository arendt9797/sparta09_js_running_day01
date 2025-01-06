function applyCoupon(cart, coupon) {
    cart.items.forEach((item) => {
        item.price -= coupon.discount;
    });
}

const userACart = {
    items: [
        { name: "키보드", price: 30000 },
        { name: "마우스", price: 20000 },
    ],
};

const userBCart = userACart;
const coupon = { discount: 5000 };

applyCoupon(userBCart, coupon);

/* 
1. userACart.items와 userBCart.items 모두 다음과 같이 변한다. 
[
    { name: "키보드", price: 25000 },
    { name: "마우스", price: 15000 },
]

2. 
기본형 데이터처럼 변수를 복사하려해서 생긴 문제다. 
객체는 참조형 데이터이다. 참조형 데이터의 경우 변수가 가리키는 메모리에는 값이 아니라 주소값이 들어있다. 
따라서 userAcart와 userBcart는 같은 주소값을 참조한다. 
해당 데이터에 변화가 생기더라도 두 변수는 여전히 같은 주소값을 가리키기 때문에, 다시 말해 같은 객체를 가리키기 때문에
userAcart나 userBcart나 items에 접근하면 둘 모두 변화가 생긴 데이터를 보게 된다. 

3.
user A와  user B가 독립적으로 동작하려면 둘이 다른 주소값을 가리키도록 해야한다. 
여러가지 방법이 있는데, 

const userBCart = {
    items: [
        { name: "키보드", price: 30000 },
        { name: "마우스", price: 20000 },
    ],
};
이처럼 아예 userBCart를 새로 정의하거나


let deepCopy = function (target) {
    let result = {}
    if (typeof target === 'object' && target !== null) {
        for (key in target) 
            result[key] = deepCopy(result[key])
    } else {
        result = target
    }
    return result
}

const userBCart = deepCopy(userACart)

이렇게 재귀를 이용한 반복을 통해 deep copy를 구현해야한다. 

*/
