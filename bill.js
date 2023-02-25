class Customer {
  constructor(id, name, purchaseDate, billAmount) {
    this.id = id;
    this.name = name;
    this.purchaseDate = purchaseDate;
    this.billAmount = billAmount;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(id, name, purchaseDate, billAmount) {
    const newCustomer = new Customer(id, name, purchaseDate, billAmount);
    if (this.head === null) {
      this.head = newCustomer;
    } else {
      let current = this.head;
      let previous = null;
      while (current !== null && current.billAmount < billAmount) {
        previous = current;
        current = current.next;
      }
      if (previous === null) {
        this.head = newCustomer;
      } else {
        previous.next = newCustomer;
      }
      newCustomer.next = current;
    }
  }

  display() {
    let current = this.head;
    while (current !== null) {
      console.log(`Customer ID: ${current.id}`);
      console.log(`Customer Name: ${current.name}`);
      console.log(`Purchase Date: ${current.purchaseDate}`);
      console.log(`Bill Amount: ${current.billAmount}`);
      console.log("");
      current = current.next;
    }
  }

  findByYear(year) {
    let current = this.head;
    let totalAmount = 0;
    while (current !== null) {
      const purchaseYear = parseInt(current.purchaseDate.split("/")[2]);
      if (purchaseYear === year) {
        totalAmount += current.billAmount;
      }
      current = current.next;
    }
    console.log(`\nTotal purchase amount for year ${year}: ${totalAmount}\n\n`);
  }

  findByName(name) {
    let current = this.head;
    while (current !== null) {
      if (current.name === name) {
        console.log(`\nSearched For: ${current.name}`);
        console.log(`Customer Name: ${current.name}`);
        console.log(`Customer ID: ${current.id}`);
        console.log(`Purchase Date: ${current.purchaseDate}`);
        console.log(`Bill Amount: ${current.billAmount}`);
        console.log("");
      }
      current = current.next;
    }
  }
}

const linkedList = new LinkedList();

linkedList.insert(1, "Kshitij", "12/03/2021", 2000);
linkedList.insert(2, "Nikhil", "01/07/2018", 5000);
linkedList.insert(3, "Chetan", "31/01/2003", 3400);
linkedList.insert(4, "Hardik", "16/10/2012", 9860);
linkedList.insert(4, "Darshan", "16/10/2012", 1258);

console.log("\n\nAll customer data sorted by bill amount:");
linkedList.display();
linkedList.findByName("Nikhil");
linkedList.findByYear(2012);
