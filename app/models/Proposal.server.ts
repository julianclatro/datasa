import { Model } from 'model-one';
import { proposalsSchema } from '~/database/schema';
import type { ProposalI, ProposalDataI } from '~/interfaces/models'

export class Proposal extends Model implements ProposalI {
  data: ProposalDataI

  constructor(props: ProposalDataI) {
    super(proposalsSchema, props)
    this.data = props
  }
}