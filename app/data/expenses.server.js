import { prisma } from "./database.server";

export async function addExpense(expenseData) {

try{
    return await prisma.expense.create({
        data:{
            title: expenseData.title,
            amount : +expenseData.amount,
            date: new Date(expenseData.date)
        }
    });
}
catch(err){
console.log(err)
throw err;
}

}


export async function getExpenses(expenseData) {

    try{
        return await prisma.expense.findMany({orderBy: {date :'desc'}});
    }
    catch(err){
    console.log(err)
    throw err;
    }
    
    }

    export async function getExpense(id) {

        try{
            return await prisma.expense.findFirst({where:{id}})
        }
        catch(err){
        console.log(err)
        throw err;
        }
        
        }
    