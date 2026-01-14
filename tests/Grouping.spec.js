import {test,expect} from '@playwright/test'

 test.describe.only("Group 1",()=>{
              test("Test1",async({page})=>{
            console.log("===This is test1======");
                })
           test("Test2",async({page})=>{
              console.log("===This is test2======");
               })
 })

 test.describe("Group 2",()=>{
         test("Test3",async({page})=>{
           console.log("===This is test3======");
                })
          test("Test4",async({page})=>{
           console.log("===This is test4======");
                 })
 })
 test.beforeEach(async()=>{
    console.log("====before Each block====")
 })
  test.beforeAll(async()=>{
    console.log("====before All block====")
 })
  test.afterEach(async()=>{
    console.log("====after Each block====")
 })
  test.afterAll(async()=>{
    console.log("====after all block====")
 })
 
 