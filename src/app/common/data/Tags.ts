import { Tag } from '../../models/Tag';

const javaTag = new Tag(1, 'Java');
const securityTag = new Tag(2, 'Security');
const angularTag = new Tag(3, 'Angular');
const cicdTag = new Tag(4, 'CICD');
const devOpsTag = new Tag(5, 'DevOps');

const tags = [javaTag, securityTag, angularTag, cicdTag, devOpsTag];

export default tags;
