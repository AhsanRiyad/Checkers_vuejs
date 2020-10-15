export default {
    data: function () {
        return {

        }
    },
    methods: {
        //form validation rules, working for all pages
        fieldRulesProp(...args) {
            /* this vuex variable is used in allFormInputs, commonMixins, baseTable,
            all are connected for validation */

            //argument list
            // required, validationFieldRule, validationFieldName , forOther custome argument

            if (/(Email|email)/g.test(args[1])) {
                if (args[0] == true) {
                    return ([
                        v => !!v || args[2] + ' is required',
                        v => /[a-zA-Z0-9._-]{2,15}@[a-zA-Z0-9_-]{2,15}\.[a-zA-Z-]{2,10}(\.[a-zA-Z]{2})*$/g.test(v) || 'Invalid'
                    ]);
                } else {
                    return ([
                        v => {
                            if (this.R.isNil(v) || this.R.isEmpty(v)) return true;
                            if (!/[a-zA-Z0-9._-]{2,15}@[a-zA-Z0-9_-]{2,15}\.[a-zA-Z-]{2,10}(\.[a-zA-Z]{2})*$/g.test(v)) return args[2] + ' is invalid';
                        },
                    ]);
                }
            }
            else if (/(Mobile|mobile)/g.test(args[1])) {
                if (args[0] == true) {
                    return ([
                        v => !!v || args[2] + ' is required',
                        v => /[+]{0,1}[\d]{11,}/g.test(v) || args[2] + ' is Invalid'
                    ]);
                } else {
                    return ([
                        v => {
                            if (this.R.isNil(v) || this.R.isEmpty(v)) return true;
                            if (!/[+]{0,1}[\d]{15,}/g.test(v)) return args[2] + ' is invalid';
                        },
                    ]);
                }
            }
            else if (/(Password|password)/g.test(args[1])) {
                if (args[0] == true) {
                    return ([
                        v => !!v || args[2] + ' is required',
                    ]);
                } else {
                    return ([
                        v => {
                            if (this.R.isNil(v) || this.R.isEmpty(v)) return true;
                        },
                    ]);
                }
            }
            else if (/(Name|name)/g.test(args[1])) {
                if (args[0] == true) {
                    return ([
                        v => !!v || args[2] + ' is required',
                        v => /^(([a-zA-Z]{1,}[\s]?(.)?[\s]?)*)([a-zA-Z]){1,}$/g.test(v) || args[2] + ' is invalid'
                    ]);
                } else {
                    return ([
                        v => {
                            if (this.R.isNil(v) || this.R.isEmpty(v)) return true;
                            else if (/^(([a-zA-Z]{1,}[\s]?(.)?[\s]?)*)([a-zA-Z]){1,}$/g.test(v)) return args[2] + ' is invalid';
                        },
                    ]);
                }
            }
            else if (/(CompanyName)/g.test(args[1])) {
                if (args[0] == true) {
                    return ([
                        v => !!v || args[2] + ' is required',
                        v => /^(([a-zA-Z()]{1,}[\s]?(.)?[\s]?)*)[a-zA-Z()]{1,}\.?$/gis.test(v) || args[2] + ' is invalid'
                    ]);
                } else {
                    return ([
                        v => {
                            if (this.R.isNil(v) || this.R.isEmpty(v)) return true;
                            else if (/^(([a-zA-Z()]{1,}[\s]?(.)?[\s]?)*)[a-zA-Z()]{1,}\.?$/gis.test(v)) return args[2] + ' is invalid';
                        },
                    ]);
                }
            }
            else if (/(BranchName)/g.test(args[1])) {
                if (args[0] == true) {
                    return ([
                        v => !!v || args[2] + ' is required',
                        v => /^(([0-9a-zA-Z]{1,}[\s]?(.)?[\s]?)*)[a-zA-Z0-9]{1,}/g.test(v) || args[2] + ' is invalid'
                    ]);
                } else {
                    return ([
                        v => {
                            if (this.R.isNil(v) || this.R.isEmpty(v)) return true;
                            else if (/^(([0-9a-zA-Z]{1,}[\s]?(.)?[\s]?)*)[a-zA-Z0-9]{1,}/g.test(v)) return args[2] + ' is invalid';
                            else return true;
                        },
                    ]);
                }
            }

            else if (/(price|cost)/g.test(args[1])) {

                if (args[0] == true) {
                    return ([
                        v => {
                            if (this.R.isNil(v) || this.R.isEmpty(v)) return args[2] + ' is required';
                            else if (v < 1) return args[2] + ' can not be less than 1';
                            else return true;

                        },
                    ]);
                } else {
                    return ([
                        v => {
                            if (this.R.isNil(v) || this.R.isEmpty(v)) return true;
                            else if (v < 1) return args[2] + ' can not be less than 1';
                            else return true;
                        },
                    ]);
                }
            }
            else if (/(quantity_purchase)/g.test(args[1])) {
                console.log(args[4]);

                return ([
                    v => {
                        if (this.R.isNil(v) || this.R.isEmpty(v)) return args[2] + ' is required';
                        else if (args[4].having_serial) {
                            if (args[4].quantity != this.R.filter(n => n.product_id == args[4].id).length, args[5]) return 'serial missing';
                            else return true;
                        }
                        else if (v < 1) return args[2] + ' can not be less than 1';
                        else return true;
                    },
                ]);
            }
            else if (/(Discount|discount)/g.test(args[1])) {
                if (args[0] == true) {
                    return ([
                        v => {
                            if (this.R.isNil(v) || this.R.isEmpty(v)) return false;
                            else if (v < 0) return args[2] + ' is invalid';
                            else if (v > 99) return args[2] + ' is invalid';
                            else return true;
                        },
                    ]);
                } else {
                    return ([
                        v => {
                            if (this.R.isNil(v) || this.R.isEmpty(v)) return true;
                            else if (v < 0) return args[2] + ' is invalid';
                            else if (v > 99) return args[2] + ' is invalid';
                            else return true;
                        },
                    ]);
                }
            }
            else if (/(date|Date)/g.test(args[1])) {
                if (args[0] == true) {
                    return ([
                        v => {
                            if (this.R.isNil(v) || this.R.isEmpty(v)) return args[2] + 'is required';
                            else return true;
                        },
                    ]);
                } else {
                    return ([
                        v => {
                            if (this.R.isNil(v) || this.R.isEmpty(v)) return true;
                            else return true;
                        },
                    ]);
                }
            }
            else if (/(Others|others)/g.test(args[1])) {
                if (args[0] == true) {
                    return ([
                        v => {
                            if (this.R.isNil(v) || this.R.isEmpty(v)) return 'filed can not be empty';
                            else return true;
                        },
                    ]);
                } else {
                    return ([
                        v => {
                            if (this.R.isNil(v) || this.R.isEmpty(v)) return true;
                            else return true;
                        },
                    ]);
                }
            }
            else {
                return ([v => !!v || true]);
            }
        },
    }
}