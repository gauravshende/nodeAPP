exports.addition=function(a,b){

    return parseInt(a)+parseInt(b);
}
exports.subtract=function(a,b){

    return parseInt(a)-parseInt(b);
}
exports.multiply=function(a,b){

    return parseInt(a)*parseInt(b);
}
exports.division=function(a,b){

    return parseInt(a)/parseInt(b);
}
exports.factorial=function(a){

	fact=1;
	for(i=1;i<=a;i++){
		fact=fact*i;
	}
    return fact;
}