import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class TrustCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    account?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    trustRating?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    score?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
}
