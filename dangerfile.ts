import { danger, fail, schedule } from "danger"
import labels from 'danger-plugin-labels'


const github = danger.github;

if(!github.api){
    fail("no access to the api");
}
schedule(labels({
    rules: [
        { match: /backend/i, label: 'backend' },
        { match: /Ready for Review/i, label: 'Ready for Review' }
      ]
}))