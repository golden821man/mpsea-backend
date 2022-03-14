import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class VisitCreateManyWalletInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    visitedBy?: string;

    @Field(() => String, {nullable:true})
    visitedByReference?: string;

    @Field(() => Date, {nullable:true})
    whenVisitTookPlace?: Date | string;
}
