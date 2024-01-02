import pandas as pd 
from datetime import datetime

DataBase = 'Store.xlsx'

def create_table():
    try:
        pd.read_excel(DataBase)
    except FileNotFoundError:
        df = pd.DataFrame(columns=['Order_id','Customer_name','Order_details', 'Order_quantity','Date'])
        df.to_excel(DataBase,index=False)

def insert_order(customer_name, order_details, order_quantity):
    date = datetime.now().strftime('%y-%m-%d %H:%M:%S')

    df = pd.read_excel(DataBase)

    last_order_id = df['Order_id'].max() if not df.empty else 0

    new_order = pd.DataFrame([[last_order_id + 1, customer_name, order_details, order_quantity, date]],
                             columns=['Order_id','Customer_name','Order_details','Order_quantity','Date'])
    
    df = pd.concat([df, new_order], ignore_index=True)
    df.to_excel(DataBase, index=False)

def export_to_excel():
    return DataBase

def get_order_details(order_id):
    df = pd.read_excel(DataBase)
    order_details = df[df['Order_id'] == order_id]
    return order_details.to_dict(orient='records')[0] if not order_details.empty else None

if __name__ == '__main__':
    create_table()

    while True:
        print('\n Store Management ')
        print("1. Place Order")
        print("2. Export to Excel")
        print("3. Get order details by order id")            
        print("4. Exit")

        choice = input("Enter Your choice(1/2/3/4) : ") 

        if choice == '1':
            customer_name = input("Enter Customer Name : ")           
            order_details = input("Enter Order Details : ")
            order_quantity = int(input("Enter the Quantity : "))
            # amount = int(input("Price of the product : "))

            insert_order(customer_name, order_details, order_quantity)
            print("Order placed Successfully")
            
        elif choice == '2':
            excel_filename = export_to_excel()
            print(f"Exported in excel {excel_filename}")

        elif choice == '3':
            order_id = int(input("Enter order number :"))
            order_details = get_order_details(order_id)

            if order_details:
                print("\n Order Details")                    
                print(f"Order Id = {order_details['Order_id']}")                    
                print(f"Customer Name = {order_details['Customer_name']}")                    
                print(f"Order Details = {order_details['Order_details']}")                    
                print(f"Order Quantity = {order_details['Order_quantity']}")
                print(f"Date = {order_details['Date']}")
                # print(f"Bill = {amount}")                 
            else:
                print("Order Not Found")
        
        elif choice == '4':
            print("Exiting the process")
            break
        
        else:
            print("Invalid choice. Please enter correct choice")
