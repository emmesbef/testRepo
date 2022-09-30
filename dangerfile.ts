import { danger, fail, warn } from "danger"

const gitlab = danger.gitlab;

if(!gitlab.api){
    fail("no access to the api");
}