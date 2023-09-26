// Write your solution in this file!
var customerName = 'bob';
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName;

}
function setBestCustomer() {
    bestCustomer = 'not bob';
    return bestCustomer;
}
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
    return bestCustomer;
}
const leastFavoriteCustomer= 'Initial value';
 

function changeLeastFavoriteCustomer(newFavorite) {
  leastFavoriteCustomer = newFavorite; // Update the value of leastFavoriteCustomer
}