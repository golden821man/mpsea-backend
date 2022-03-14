import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CreditRequestWhereUniqueInput } from './credit-request-where-unique.input';

@ArgsType()
export class DeleteOneCreditRequestArgs {

    @Field(() => CreditRequestWhereUniqueInput, {nullable:false})
    where!: CreditRequestWhereUniqueInput;
}
