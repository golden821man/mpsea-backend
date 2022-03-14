import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionMethodEnum } from '../prisma/transaction-method.enum';

@InputType()
export class SettlementUncheckedCreateWithoutWalletInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => TransactionMethodEnum, {nullable:false})
    type!: keyof typeof TransactionMethodEnum;

    @Field(() => String, {nullable:false})
    account!: string;

    @Field(() => String, {nullable:true})
    bankAccount?: string;

    @Field(() => String, {nullable:true})
    bankAccountName?: string;

    @Field(() => String, {nullable:true})
    bankBranch?: string;

    @Field(() => String, {nullable:true})
    bankName?: string;

    @Field(() => String, {nullable:true})
    phoneNumber?: string;

    @Field(() => Boolean, {nullable:true})
    verified?: boolean;

    @Field(() => String, {nullable:true})
    verifiedByUser?: string;

    @Field(() => String, {nullable:true})
    paybill?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:false})
    createdBy!: string;

    @Field(() => Boolean, {nullable:false})
    createdByAgent!: boolean;
}
