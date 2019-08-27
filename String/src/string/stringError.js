class StringError {
    constructor(msg){
        this.msg = msg;
    }
}

StringError.prototype = Object.create(Error.prototype);
StringError.prototype.constructor = StringError;