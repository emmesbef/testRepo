import { danger, fail, warn } from "danger"

const github = danger.github.pr;

if(github.body.length===0){
    fail("add some text");
}