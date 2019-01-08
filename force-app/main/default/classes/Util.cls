public with sharing class Util {
    public Util() {

    }

    @AuraEnabled(cacheable=true)
    public static Map<String, String> generateMap(){
       Map<String, String> testMap = new Map<String,String>();
       testMap.put('Amit', 'CRM Consultant');
       testMap.put('Narendra', 'CRM Consultant');
       testMap.put('Shikha', 'Techinal Architect');
       testMap.put('Geeta', 'Sr. CRM Consultant');
       return testMap;
    }
}
