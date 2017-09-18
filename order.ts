interface State {
    order: Order;

    cancelOrder();
    verifyPayment();
    shipOrder();
}

class Order {
    public cancelledOrderState: State;
    public paymentPendingState: State;
    public orderShippedState: State;
    public orderBeingPreparedState: State;

    public currentState: State;

    constructor() {
        this.cancelledOrderState = new CancelledOrderState(this);
        this.paymentPendingState = new PaymentPendingState(this);
        this.orderShippedState = new OrderShippedState(this);
        this.orderBeingPreparedState = new OrderBeingPreparedState(this);

        this.setState(this.paymentPendingState);
    }

    public setState(state: State) {
        this.currentState = state;
    }

    public getState(): State {
        return this.currentState;
    }
}

class PaymentPendingState implements State {
    order: Order;

    constructor(order: Order) {
        this.order = order;
    }

    public cancelOrder() {
        console.log('Cancelling your unpaid order...');
        this.order.setState(this.order.cancelledOrderState);
    }

    public verifyPayment() {
        console.log('Payment verified! Shipping soon.');
        this.order.setState(this.order.orderBeingPreparedState);
    }

    public shipOrder() {
        console.log('Cannot ship the order when payment is pending!');
    }

}

class CancelledOrderState implements State {
    order: Order;

    constructor(order: Order) {
        this.order = order;
    }

    cancelOrder() {
        console.log('Your order has already been cancelled');
    }

    verifyPayment() {
        console.log('Order cancelled, cannot verify payment');
    }

    shipOrder() {
        console.log('Order cannot ship, it has been cancelled');
    }

}

class OrderBeingPreparedState implements State {
    order: Order;

    constructor(order: Order) {
        this.order = order;
    }

    cancelOrder() {
        console.log('Cancelling your order');
        this.order.setState(this.order.cancelledOrderState);
    }

    verifyPayment() {
        console.log('Already verified your payment');
    }

    shipOrder() {
        console.log('Shipping your order now!');
        this.order.setState(this.order.orderShippedState);
    }

}

class OrderShippedState implements State {
    order: Order;

    constructor(order: Order) {
        this.order = order;
    }

    cancelOrder() {
        console.log('You cannot cancel, already shipped...');
    }

    verifyPayment() {
        console.log('You cannot verify payment, already shipped...');
    }

    shipOrder() {
        console.log('You cannot ship it again, already shipped...');
    }

}

let order = new Order();
order.getState().verifyPayment();
order.getState().shipOrder();

console.log('Order state: ' + (<any> order.getState()).constructor.name);