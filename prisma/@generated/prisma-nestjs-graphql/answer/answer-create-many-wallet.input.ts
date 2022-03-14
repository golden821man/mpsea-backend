import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AnswerCreateManyWalletInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    questionId!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:false})
    answer!: string;

    @Field(() => String, {nullable:true})
    answeredBy?: string;

    @Field(() => String, {nullable:true})
    answeredByReference?: string;
}
