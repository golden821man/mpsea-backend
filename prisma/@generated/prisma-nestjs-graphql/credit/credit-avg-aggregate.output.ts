import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class CreditAvgAggregate {

    @Field(() => Float, {nullable:true})
    amount?: number;

    @Field(() => Float, {nullable:true})
    installmentsCount?: number;

    @Field(() => Float, {nullable:true})
    installmentsCountPaid?: number;

    @Field(() => Float, {nullable:true})
    totalPaid?: number;

    @Field(() => Float, {nullable:true})
    totalToPay?: number;

    @Field(() => Float, {nullable:true})
    duration?: number;

    @Field(() => Float, {nullable:true})
    fundUpfrontAmount?: number;

    @Field(() => Float, {nullable:true})
    fundFeesAmount?: number;

    @Field(() => Float, {nullable:true})
    amountWithFees?: number;

    @Field(() => Float, {nullable:true})
    seviFeesAmount?: number;

    @Field(() => Float, {nullable:true})
    orderWalletShareFeesAmount?: number;

    @Field(() => Float, {nullable:true})
    fundPostDeliveryAmount?: number;
}
