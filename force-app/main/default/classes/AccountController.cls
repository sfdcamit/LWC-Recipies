public with sharing class AccountController {
    public AccountController() {

    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(){
        return [Select Id, Name, Industry, Phone, Rating From Account Limit 10];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> findAccounts(String searchKey) {
        String key = '%' + searchKey + '%';
        return [SELECT Id, Name, Phone, Rating, Industry FROM Account 
                        WHERE Name LIKE :key LIMIT 100];
    }
}
