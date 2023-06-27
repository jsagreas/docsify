

# Example

# Basic
```plantuml
@startuml
autonumber

Alice -> Bob: Authentication Request [[$./other-file docs]]
Bob --> Alice: Authentication Response

Alice -> Bob: Another authentication Request
Alice <-- Bob: another authentication Response [[$../other-file docs]]
@enduml
```


# Import External PUML

# Example 1
```plantuml
@startuml
autonumber

[[!include ./pumls/sample.puml]]

Alice -> Bob: Another authentication Request
Alice <-- Bob: another authentication Response
@enduml
```

# Example 2
```plantuml
[[!include ./pumls/sample2.puml]]
```
