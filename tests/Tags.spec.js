import {test,expect} from '@playwright/test'

test('test1@sanity',async({page})=>{
    console.log("======this is test1  sanity test====");
})
test('test2@sanity',async({page})=>{
    console.log("======this is test2 sanity test====");
})
test('test3@reg',async({page})=>{
    console.log("======this is test3 regression test====");
})
test('test4@reg',async({page})=>{
    console.log("======this is test4 regression test====");
})
test('test5@sanity@reg',async({page})=>{
    console.log("======this is test5  sanity  and regression test====");
})